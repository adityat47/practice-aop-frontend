"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  onNavigate?: () => void
  showLabels?: boolean
  showTitle?: boolean
}

// Inline SVG icon for "Clients" (uses the provided path). Uses currentColor so it inherits text color.
function ClientsIcon({ className, ...props }: any) {
  return (
    <svg
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M13.908 11.8559C13.0193 10.3547 11.6316 9.18488 9.96832 8.53493C10.7955 7.93782 11.4064 7.10534 11.7147 6.15543C12.023 5.20551 12.0129 4.18631 11.686 3.24219C11.359 2.29808 10.7318 1.47691 9.893 0.895019C9.05425 0.313124 8.04655 0 7.01263 0C5.97872 0 4.97101 0.313124 4.13226 0.895019C3.2935 1.47691 2.66622 2.29808 2.33927 3.24219C2.01232 4.18631 2.00227 5.20551 2.31055 6.15543C2.61883 7.10534 3.22981 7.93782 4.05694 8.53493C2.39366 9.18488 1.00599 10.3547 0.117313 11.8559C0.0622476 11.9412 0.0255464 12.0362 0.00939189 12.1353C-0.00676267 12.2345 -0.00204092 12.3357 0.0232765 12.4331C0.048594 12.5305 0.0939903 12.6219 0.156767 12.7021C0.219543 12.7822 0.298418 12.8494 0.388702 12.8996C0.478986 12.9498 0.578836 12.982 0.682317 12.9943C0.785797 13.0067 0.890796 12.9988 0.99107 12.9713C1.09134 12.9438 1.18485 12.8972 1.26602 12.8342C1.34719 12.7712 1.41438 12.6931 1.46358 12.6046C2.63808 10.6506 4.71225 9.48512 7.01263 9.48512C9.31301 9.48512 11.3872 10.6512 12.5617 12.6046C12.6683 12.7697 12.8375 12.8883 13.0333 12.9355C13.2292 12.9827 13.4365 12.9547 13.6113 12.8575C13.7861 12.7603 13.9148 12.6014 13.9702 12.4145C14.0256 12.2276 14.0032 12.0273 13.908 11.8559ZM3.64211 4.7435C3.64211 4.10184 3.83978 3.4746 4.21014 2.94108C4.5805 2.40756 5.1069 1.99173 5.72279 1.74618C6.33867 1.50063 7.01637 1.43638 7.67019 1.56157C8.32401 1.68675 8.92458 1.99573 9.39595 2.44945C9.86733 2.90317 10.1883 3.48125 10.3184 4.11057C10.4484 4.7399 10.3817 5.39221 10.1266 5.98503C9.87148 6.57784 9.43948 7.08453 8.8852 7.44101C8.33092 7.7975 7.67926 7.98777 7.01263 7.98777C6.11903 7.98678 5.26232 7.64465 4.63045 7.03645C3.99857 6.42825 3.64314 5.60363 3.64211 4.7435Z" fill="currentColor"/>
    </svg>
  )
}

// Custom Dashboard icon: three bottom-aligned bars of increasing height, left and bottom axes
function DashboardIcon({ className, ...props }: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g fill="none" stroke="none">
        {/* bars: left-to-right increasing height, bottom-aligned */}
        <rect x="8" y="10" width="3" height="8" rx="0.5" fill="currentColor" />
        <rect x="13" y="6" width="3" height="12" rx="0.5" fill="currentColor" />
        <rect x="18" y="8" width="3" height="10" rx="0.5" fill="currentColor" />
        {/* axes: left and bottom */}
        <rect x="4" y="3" width="1.6" height="18" rx="0.8" fill="currentColor" opacity="0.9" />
        <rect x="4" y="21" width="16" height="1.6" rx="0.8" fill="currentColor" opacity="0.9" />
      </g>
    </svg>
  )
}

// Inline SVG icon for "Uploaded Files" (uses the provided path). Uses currentColor so it inherits text color.
function UploadedIcon({ className, ...props }: any) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...props}
    >
      <rect width="20" height="20" fill="url(#pattern0_316_734)" />
      <defs>
        <pattern id="pattern0_316_734" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_316_734" transform="scale(0.0111111)" />
        </pattern>
        <image id="image0_316_734" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2cS0oDURQFWyGuIa7Q3zr9uxlN5iUNEQQdhptwTtUGDlU8umd3WURERERERERE/gJcAhdLC8AV8AA8A3ty2QNPwD2wmY58DXzQxzuwnXzJjZF/eBt52YfPRTt3E6FfTm15BjxNhN6d2vIM+JoI/S/uHpk2YQydvVsnjKGzd+uEMXT2bp0whs7erRPG0Nm7dcIYOnu3ThhDZ+/WCWPo7N06YQydvVsnjKGzd+uEMXT2bp0w5xa6jcXQMxh6CEMPYeghDJ0e2t0j0yaMobN364QxdPZunTCGzt6tE8bQ2bt1whg6e7dOGENn79YJY+js3TphDJ29WyeMobN364QxdPZunTCGzt6tE+aEoT3HBp8Todejr+08ToRer862czt1BHa9OtvK69h54/W07+HqbGPk7UjkX7E369XZ9XsV/oPcHRxvxg91i4iIiIiIiIgs58k3sUm0DiNv2wYAAAAASUVORK5CYII=" />
      </defs>
    </svg>
  )
}

export function Sidebar({ className, onNavigate, showLabels = true, showTitle = true }: Props) {
  const items = [
    { label: "Clients", href: "#", icon: ClientsIcon },
    { label: "Dashboard", href: "#", icon: DashboardIcon },
    { label: "Uploaded Files", href: "#", icon: UploadedIcon },
  ]

  return (
    <nav
      className={cn("w-48 h-full text-white", "flex flex-col gap-2 p-3", className)}
      style={{ backgroundImage: "linear-gradient(180deg, #131C66, #3E5892)" }}
      aria-label="Sidebar"
    >
      {showTitle && (
        <div className={cn("px-2 py-3 text-sm font-semibold tracking-wide font-kadwa")}>AOP</div>
      )}

      <ul className="flex flex-col gap-1">
        {items.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <Link
              href={href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-2 text-sm",
                "hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60",
              )}
            >
              <Icon
                className={cn(label === "Dashboard" ? "h-5 w-5" : "h-4 w-4")}
                aria-hidden
              />
              {showLabels && <span className="text-pretty">{label}</span>}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto px-2 py-2 text-[10px] opacity-70">Sidebar width: 192px</div>
    </nav>
  )
}
