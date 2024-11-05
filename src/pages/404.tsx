import Button from "../components/elements/Button/Button";

const Custom404 = () => {
    return(
        <div className="not-found rubik">
            <div className="wrapper">
                <p style={{ fontSize: "42px", lineHeight:"40px", fontWeight:"600" }}>Halaman tidak ditemukan.</p>
                <div style={{ width:"400px" }}>
                <Button buttontype="primary" buttontext="Kembali ke halaman utama" buttonlink="/" icon=""/>
                </div>
                
            </div>
        </div>

    )
};

export default Custom404;