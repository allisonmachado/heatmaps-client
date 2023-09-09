import { redirect } from "next/navigation";
import { MAX_REQUEST_TIMEOUT_DURATION } from "./constants";

export async function boundRequest(
  requestPath,
  requestOptions,
  maxDuration = MAX_REQUEST_TIMEOUT_DURATION
) {
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), maxDuration);

    const response = await fetch(requestPath, {
      ...requestOptions,
      signal: controller.signal,
    });
    clearTimeout(id);

    if (response.status === 401) {
      throw new Error("Not authorized");
    }

    return response;
  } catch (error) {
    if (error.message === "This operation was aborted") {
      return redirect("/cold-start");
    }

    return redirect("/login");
  }
}
