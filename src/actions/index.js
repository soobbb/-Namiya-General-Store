export const POST = "POST";
export const DELETE = "DELETE";
export const postCounselor = (title, content) => {
  return {
    type: POST,
    payload: {
      title,
      content,
    },
  };
};
export const deleteCounselor = (id) => {
  return {
    type: DELETE,
    payload: {
      id,
    },
  };
};
