import Button from "../components/elements/Button/Button";

const Custom404 = () => {
    return(
        <div className="not-found rubik">
            <div className="wrapper">
                <p style={{ fontSize: "35px", lineHeight:"40px", fontWeight:"600", padding:"0 20px"}}>Halaman tidak ditemukan.</p>
                <div style={{  }}>
                <Button buttontype="primary" buttontext="Kembali ke halaman utama" buttonlink="/" icon=""/>
                </div>
                
            </div>
        </div>

    )
};

export default Custom404;