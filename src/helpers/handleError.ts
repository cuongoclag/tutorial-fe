import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { toast } from 'react-toastify';

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(
  error: unknown
): error is { message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof (error as any).message === 'string'
  )
}

export function showError(error: unknown) {
  if (isFetchBaseQueryError(error)) {
    const errorData = error?.data as Object;
  
    if (errorData && "description" in errorData) {
      toast.error(`${errorData.description}`)
    }
  } else if (isErrorWithMessage(error)) {
    // you can access a string 'message' property here
    toast.error(`${error.message}`)
  }
}