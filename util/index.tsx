"use client"
export function setUserDetails(details: object): void {
    if(typeof window === 'undefined') return;
    localStorage.setItem('userDetails', JSON.stringify(details));
}

export function getUserDetails(): object | null {
    if(typeof window === 'undefined') return {};
    const data = localStorage.getItem('userDetails');
    return data ? JSON.parse(data) : null;
}

// x-client-id helpers
export function setClientId(id: string): void {
    if (typeof window === 'undefined') return;
    try {
        localStorage.setItem('x_client_id', id);
    } catch {}
}

export function getClientId(): string | null {
    if (typeof window === 'undefined') return null;
    try {
        return localStorage.getItem('x_client_id');
    } catch {
        return null;
    }
}