export default class ApiResponse {
   static send({ success = true, message, data = null, status = 200, options, headers = {} }) {
      return Response.json(
         {
            success,
            message: {
               text: message?.text || null,
               label: message?.label || null,
               error_code: message?.error_code || null,
            },
            data,
            ...options,
         },
         { status, headers },
      );
   }

   static fail({ message, status = 400, headers, options } = {}) {
      return this.send({ success: false, message, status, headers , options});
   }

   static ok(data, { message, status = 200, headers, options } = {}) {
      return this.send({ success: true, data, message, status, headers, options });
   }

   static created(data, { message, status = 201, headers, options } = {}) {
      return this.send({ success: true, data, message, status, headers, options });
   }

   static unauthorized({ message, status = 401, headers, options } = {}) {
      return this.send({ success: false, message, status, headers, options });
   }

   static forbidden({ message, status = 403, headers, options } = {}) {
      return this.send({ success: false, message, status, headers, options });
   }

   static notFound({ message, status = 404, headers, options } = {}) {
      return this.send({ success: false, message, status, headers, options });
   }

   static badRequest({ message, status = 400, headers, options } = {}) {
      return this.send({ success: false, message, status, headers, options });
   }

   static tooManyRequests({ message, status = 429, headers, options } = {}) {
      return this.send({ success: false, message, status, headers, options });
   }

   static serviceUnavailable({ message, status = 503, headers, options } = {}) {
      return this.send({ success: false, message, status, headers, options });
   }

   static internalServerError({ message = { text: "Oops! Something went wrong" }, status = 500, headers, options } = {}) {
      return this.send({ success: false, message, status, headers, options });
   }
}
