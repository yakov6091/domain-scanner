'use client';

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export function SearchBar() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleChange(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);

    }

    return (
        <input
            className="mt-30 border-4 border-blue-700 rounded-md"
            type="text"
            placeholder="example@example.com"
            onChange={(ev) => {
                handleChange(ev.target.value)
            }}
            defaultValue={searchParams.get('query')?.toString()}
        />
    )


}