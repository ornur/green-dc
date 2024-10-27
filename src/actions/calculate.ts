'use server'

export async function onSubmitHanlder(formData: FormData) {
    const query = formData.get("query");
    console.log(query);
  };