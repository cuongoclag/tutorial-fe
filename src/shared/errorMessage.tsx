interface IErrorMessage {
    error: string
}
const ErrorMessage = (props: IErrorMessage) => {
  const { error } = props;
  return <p className="text-red-500">{error}</p>;
};

export default ErrorMessage;
