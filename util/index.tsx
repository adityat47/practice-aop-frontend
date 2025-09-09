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