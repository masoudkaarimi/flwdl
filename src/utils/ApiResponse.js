export default class ApiResponse {
   static send({ success = true, message, data = null, status = 200, options }) {
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
         { status },
      );
   }

   static fail({ message, status = 400, options } = {}) {
      return this.send({ success: false, message, status, options });
   }

   static ok(data, { message, status = 200, options } = {}) {
      return this.send({ success: true, data, message, status, options });
   }

   static created(data, { message, status = 201, options } = {}) {
      return this.send({ success: true, data, message, status, options });
   }

   static unauthorized({ message, status = 401, options } = {}) {
      return this.send({ success: false, message, status, options });
   }

   static forbidden({ message, status = 403, options } = {}) {
      return this.send({ success: false, message, status, options });
   }

   static notFound({ message, status = 404, options } = {}) {
      return this.send({ success: false, message, status, options });
   }

   static badRequest({ message, status = 400, options } = {}) {
      return this.send({ success: false, message, status, options });
   }

   static tooManyRequests({ message, status = 429, options } = {}) {
      return this.send({ success: false, message, status, options });
   }

   static serviceUnavailable({ message, status = 503, options } = {}) {
      return this.send({ success: false, message, status, options });
   }

   static internalServerError({ message = { text: "Oops! Something went wrong" }, status = 500, options } = {}) {
      return this.send({ success: false, message, status, options });
   }
}
