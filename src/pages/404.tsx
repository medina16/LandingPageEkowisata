import Button from "./components/elements/Button/Button";

const Custom404 = () => {
    return(
        <div className="not-found rubik">
            <div className="wrapper">
                <p style={{ fontSize: "42px" }}>Halaman tidak ditemukan.</p>
                <Button buttontext="Kembali ke halaman utama" buttonlink="/"/>
            </div>
        </div>

    )
};

export default Custom404;