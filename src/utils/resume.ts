export const downloadResume = () => {
  const link = document.createElement('a');
  link.href = `${import.meta.env.BASE_URL}Vaibhav_Jagtap_Resume.pdf`;
  link.download = 'Vaibhav_Jagtap_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
