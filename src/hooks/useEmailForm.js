import { useState } from 'react';

export const useEmailForm = () => {
  const initialData = {
    userName: '',
    userEmail: '',
    userPhone: '',
    messageSubject: '',
    messageContent: '',
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const reset = () => {
    setFormData(initialData);
  };

  return { formData, handleChange, reset };
};
