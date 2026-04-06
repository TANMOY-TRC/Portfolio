function TextHighlight({ ...props }) {
  return (
    <span className="font-semibold text-primary" {...props} />
  )
}

function TextSemiBold({ ...props }) {
  return (
    <span className="font-semibold" {...props} />
  )
}

export {
  TextHighlight,
  TextSemiBold
};
