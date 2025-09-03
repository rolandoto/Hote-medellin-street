import { useState } from 'react';

const useForValuesEmail = () => {

  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target
      setFormValues({ ...formValues, [name]: value });
  };

  return [formValues, handleChange];
};

export default useForValuesEmail;