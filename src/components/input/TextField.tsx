import { Input } from "components";

export const TextField = ({ props }: any) => {
  return (
    <div className="text-field">
      <Input type="text" name="username" placeholder="" {...props} />
      <label htmlFor="username" className="label">
        Username
      </label>
    </div>
  );
};
