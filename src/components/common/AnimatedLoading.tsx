const AnimatedLoading = () => {

  const animLength = 3;
  const word = "Loading...".split("")
  return (
    <span>
      {
        word.map((v, index) =>
          <span className="dotFloat inline-block"
            style={{
              animationDuration: animLength + "s",
              animationDelay: (animLength / word.length) * index + "s"
            }}
          >
            {v}
          </span>
        )
      }
    </span>
  )
}

export default AnimatedLoading