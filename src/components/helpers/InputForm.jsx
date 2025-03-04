const InputForm = ({
  labelName,
  type,
  name,
  value,
  onChange,
  onBlur,
  condition,
  placeholder,
  errorMessage,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-1 text-sm font-medium">
        <p className="mb-2">{labelName}</p>
        {condition && <p className="msgError">{errorMessage}</p>}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`inputD ${condition && "errorD"}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputForm;
