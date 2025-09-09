"use client"
import React from 'react'
import { ClientHeader } from './components/ClientHeader';
import { ClientBody } from './components/ClientBody';
import { useQuery } from '@tanstack/react-query';
import { fetchClients } from '@/services/clients';

const Clients = () => {
  const { data, isLoading } = useQuery({ queryKey: ['clients'], queryFn: fetchClients });
  console.log(data, "data")
  return (
    <div className="min-h-dvh bg-transparent">
      <ClientHeader />
      <ClientBody />
    </div>
  );
}

export default Clients