const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const Card = ({ children, className }) => {
  return (
    <div className={classNames("overflow-hidden rounded-lg bg-white shadow-xs border border-zinc-200", className)}>
      <div className="px-5 py-4">{children}</div>
    </div>
  )
}

export default Card
