"use client"
import React, { useEffect, useState } from 'react'
import { ClientHeader } from './components/ClientHeader';
import { ClientBody } from './components/ClientBody';
import { useQuery } from '@tanstack/react-query';
import { fetchClients } from '@/services/clients';

const Clients = () => {
  const [selectedClientId, setSelectedClientId] = useState<string>("");
  const { data, isLoading, error } = useQuery({
    queryKey: ['clients'],
    queryFn: () => fetchClients(),
  });

  return (
    <div className="min-h-dvh bg-transparent">
  <ClientHeader selectedClientId={selectedClientId} onSelect={setSelectedClientId} />
  <ClientBody selectedClientId={selectedClientId} />
    </div>
  );
}

export default Clients