export const handle = async (event: any) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Hello world!"
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }
}