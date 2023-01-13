import * as yup from "yup";

export const CommentApiSchema = yup.object().shape({
    message: yup.string().required("Deixe um comentário"),
})