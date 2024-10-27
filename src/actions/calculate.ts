'use server'

export async function onSubmitHanlder(formData) {
    const query = formData.get("query");
    console.log(query);
  };