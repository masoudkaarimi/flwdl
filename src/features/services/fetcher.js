export default async function fetcher({ url, method = "GET", headers = {}, body, params = {}, ...options }) {
   try {
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

      console.log('errrrrrrrrrrrrrrrrrrror ---------------', data);


      // if (response.status !== 200) {
         // const error = new Error(data.message || "Request failed");
         // error.status = response.status;
         // throw error;
      // }

      return data;
   } catch (error) {
      error.status = error.status || 500;
      throw error;
   }
}
