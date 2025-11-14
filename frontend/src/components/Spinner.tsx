import { Oval } from 'react-loader-spinner'

type SpinnerProps = {
    height: string,
    width: string,
    visible: boolean
}

const Spinner = ({ height, width, visible }: SpinnerProps) => {
  return (
    <Oval
            height={height}
            width={width}
            color="#155dfc"
            visible={visible}
            ariaLabel="oval-loading"
            secondaryColor="white"
            strokeWidth={4}
            strokeWidthSecondary={4}
        />
  )
}

export default Spinner
