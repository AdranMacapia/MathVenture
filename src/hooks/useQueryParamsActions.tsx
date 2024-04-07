"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export const useQueryParamsActions = () => {
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    const searchParams = new URLSearchParams(window.location.search);

    const params = new URLSearchParams(searchParams);
    params.set(name, value);

    return params.toString();
  };

  const addQueryParam = ({ name, value }: { name: string; value: string }) =>
    router.replace(pathname + "?" + createQueryString({ name, value }), {
      scroll: false,
    });

  const removeQueryParam = (name?: string) => {
    let params;

    if (!name) {
      params = new URLSearchParams();
    } else {
      params = new URLSearchParams(window.location.search);

      params.delete(name);
    }

    router.replace(pathname + "?" + params.toString());
  };

  return {
    addQueryParam,
    removeQueryParam,
  };
};
