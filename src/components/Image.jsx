
const Image = ({placeholderSrc, src, ...props}) => {
  return (
    <img {...{src: placeholderSrc, ...props}} alt={props.alt || ""} className="Image" />
  )
}

export default Image