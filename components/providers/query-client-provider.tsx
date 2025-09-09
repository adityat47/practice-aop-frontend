"use client"

import { useState, type ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import dynamic from "next/dynamic"

type Props = {
  children: ReactNode
}

export function QueryClientProviderWrapper({ children }: Props) {
  // Create the client once per mount to avoid re-creating between renders
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: 1,
        },
      },
    })
  )

  return (
    <QueryClientProvider client={client}>
      {children}
      {process.env.NODE_ENV === "development" && (
        // Lazy-load Devtools to avoid chunk issues in dev (Windows/Turbopack)
        <DevtoolsLazy />
      )}
    </QueryClientProvider>
  )
}

export default QueryClientProviderWrapper

// Dynamic import keeps this strictly client-side and avoids SSR and some bundler edge cases.
const DevtoolsLazy = dynamic(
  () =>
    import("@tanstack/react-query-devtools").then((mod) => mod.ReactQueryDevtools),
  {
    ssr: false,
    loading: () => null,
  }
)
