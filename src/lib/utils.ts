import { IFormattedErrorResponse } from "@/constants/interface";
import { AxiosError, isAxiosError } from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function decodeCookie(cookie: string) {
  return decodeURIComponent(cookie);
}

export function formattedError(
  error: AxiosError<IFormattedErrorResponse> | unknown
): IFormattedErrorResponse {
  if (isAxiosError(error)) {
    const response = error.response;
    if (response) {
      const { message, info, errors } = response.data;
      const infoMessage = errors ?? "";
      return {
        message,
        infoMessage,
        status: response.status,
        statusText: response.statusText,
      };
    }
  }
  if (error instanceof Error) {
    return {
      message: error.message,
    };
  }
  return {
    message: "error",
  };
}

export function isResponseError<T>(
  response: T | IFormattedErrorResponse
): response is IFormattedErrorResponse {
  return (response as IFormattedErrorResponse).status !== undefined;
}

export function capitalizeFirstLetter(value: string) {
  try {
    return value.charAt(0).toUpperCase() + value.slice(1);
  } catch (error) {
    return "";
  }
}

export const formatPrice = (amount: number): string => {
  return Intl.NumberFormat("ne-NP", {
    maximumFractionDigits: 0,
  }).format(amount);
};
