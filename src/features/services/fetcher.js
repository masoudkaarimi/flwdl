export default async function fetcher({ url, method = "GET", headers = {}, body, params = {}, ...options }) {
   try {
      console.log(options); // todo check

      const searchParams = new URLSearchParams(params).toString();
      const response = await fetch(searchParams ? `${url}?${searchParams}` : url, {
         method,
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...headers,
         },
         body: body ? JSON.stringify(body) : null,
         ...options,
      });

      const data = await response.json();

      if (!response.ok) {
         const error = new Error(data.message || "Request failed");
         error.status = response.status;
         throw error;
      }

      return data;
   } catch (error) {
      error.status = error.status || 500;
      throw error;
   }
}
