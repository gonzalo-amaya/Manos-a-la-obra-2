function Checkbox({ checked }) {
  return (
    <>
      {/* Le pasamos "checked" al input para que sepa si debe mostrar el tilde */}
      <input disabled type="checkbox" checked={checked} />
    </>
  );
}
export default Checkbox;