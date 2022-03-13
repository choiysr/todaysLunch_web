import LinearProgress from '@mui/material/LinearProgress';

const linearStyle = {
    position: "absolute",
    width: 200,
    height: 20,
    borderRadius: 5,
    background: "white",
    ".MuiLinearProgress-bar": {
        borderRadius: 5,
        background: "linear-gradient(to right, blue, pink)",
        // animationDuration: "1.25s"
    },
}

const LoadingPage = () => {
    return (
      <div style={{position: 'absolute'}}>
          <p>로딩 페이지</p>
            <LinearProgress sx={{...linearStyle}} variant="indeterminate" />
      </div>
    );
}

export default LoadingPage;