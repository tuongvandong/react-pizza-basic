import React from "react";
import "../assets/MenuHeader.css";

const MenuHeader = () => {
  return (
    <nav className="main-nav">
      <ul className="nav-menu">
        <li>
          <a href="#">
            <span className="icon-pin"> </span>
            HÀNG MỚI
            <span className="new-tag">NEW</span>
          </a>
        </li>

        <li className="has-dropdown">
          <a href="#">
            {" "}
            SẢN PHẨM <i className="fa-light fa-chevron-down"></i>{" "}
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Tất cả sản phẩm</a>
            </li>
            <li>
              <a href="#">🔥 Hàng bán chạy</a>
            </li>
            <li className="has-submenu">
              <a href="#">
                ÁO <i className="fa-light fa-chevron-right"></i>
              </a>
              <ul className="dropdown-submenu">
                <li>
                  <a href="#">Áo thun</a>
                </li>
                <li>
                  <a href="#">Áo polo</a>
                </li>
                <li>
                  <a href="#">Áo sơ mi</a>
                </li>
                <li>
                  <a href="#">Áo khoác</a>
                </li>
                <li>
                  <a href="#">Áo nỉ - Sweater</a>
                </li>
                <li>
                  <a href="#">Áo ba lỗ</a>
                </li>
                <li>
                  <a href="#">Áo hoodie</a>
                </li>
                <li>
                  <a href="#">Áo len</a>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="#">
                Quần <i className="fa-light fa-chevron-right"></i>
              </a>
              <ul className="dropdown-submenu">
                <li>
                  <a href="#">Quần JEAN</a>
                </li>
                <li>
                  <a href="#">QUẦN SHORT polo</a>
                </li>
                <li>
                  <a href="#">QUÀN TÂY</a>
                </li>
                <li>
                  <a href="#">QUẦN KAKI</a>
                </li>
                <li>
                  <a href="#">QUẦN DÀI</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Set quần áo</a>
            </li>
            <li>
              <a href="#">Đồ lót - Boxer</a>
            </li>
            <li className="has-submenu">
              <a href="#">
                Phụ kiện <i className="fa-light fa-chevron-right"></i>
              </a>
              <ul className="dropdown-submenu">
                <li>
                  <a href="#">NÓN</a>
                </li>
                <li>
                  <a href="#">MẮT KÍNH</a>
                </li>
                <li>
                  <a href="#">THẮT LƯNG</a>
                </li>
                <li>
                  <a href="#">BALO</a>
                </li>
                <li>
                  <a href="#">VÍ</a>
                </li>
                <li>
                  <a href="#">GIÀY DÉP</a>
                </li>
                <li>
                  <a href="#">VỚ</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="has-dropdown">
          <a href="#">
            {" "}
            ÁO NAM <i className="fa-light fa-chevron-down"></i>{" "}
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Áo thun</a>
            </li>
            <li>
              <a href="#">Áo polo</a>
            </li>
            <li>
              <a href="#">Áo sơ mi</a>
            </li>
            <li>
              <a href="#">Áo khoác</a>
            </li>
            <li>
              <a href="#">Áo nỉ - Sweater</a>
            </li>
            <li>
              <a href="#">Áo ba lỗ</a>
            </li>
            <li>
              <a href="#">Áo hoodie</a>
            </li>
            <li>
              <a href="#">Áo len</a>
            </li>
          </ul>
        </li>
        <li className="has-dropdown">
          <a href="#">
            {" "}
            Quần nam <i className="fa-light fa-chevron-down"></i>{" "}
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Quần JEAN</a>
            </li>
            <li>
              <a href="#">QUẦN SHORT polo</a>
            </li>
            <li>
              <a href="#">QUÀN TÂY</a>
            </li>
            <li>
              <a href="#">QUẦN KAKI</a>
            </li>
            <li>
              <a href="#">QUẦN DÀI</a>
            </li>
          </ul>
        </li>
        <li className="has-dropdown">
          <a href="#">
            {" "}
            Phụ kiện <i className="fa-light fa-chevron-down"></i>{" "}
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">NÓN</a>
            </li>
            <li>
              <a href="#">MẮT KÍNH</a>
            </li>
            <li>
              <a href="#">THẮT LƯNG</a>
            </li>
            <li>
              <a href="#">BALO</a>
            </li>
            <li>
              <a href="#">VÍ</a>
            </li>
            <li>
              <a href="#">GIÀY DÉP</a>
            </li>
            <li>
              <a href="#">VỚ</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="/Tintuc.html"> TIN THỜI TRANG </a>
        </li>
      </ul>
    </nav>
  );
};
export default MenuHeader;
