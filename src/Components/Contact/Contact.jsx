import { TiUser } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";

const Contact = ({ name, number }) => {
  return (
    <div>
      <p>
        <TiUser />
        {name}
      </p>
      <p>
        <TiPhone />
        {number}
      </p>
    </div>
  );
};

export default Contact;
