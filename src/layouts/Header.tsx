import React from "react";
import LogoStore from "../assets/image/logo.png";
import "../assets/Header.css";

interface HeaderProps {}
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <img src={LogoStore} alt="Logo-Fail" />
        </div>
        {/* Search */}
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Bạn đang tìm gì..."
            id="searchInput"
          />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
          <div
            className="search-results"
            id="searchResults"
            style={{ display: "none" }}
          ></div>
        </div>

        {/*user actions */}
        <div className="user-actions">
          <a href="#" className="action-item">
            <i className="fa-solid fa-map-location-dot icon"></i>
            Cửa hàng
          </a>
          <a href="#" className="action-item">
            <i className="fa-regular fa-user icon"></i>
            Đăng nhập
          </a>
          <div className="cart-shopping">
            <a
              href="#"
              className="action-item cart-icon header-item cart-icon-container"
            >
              <i className="fa-solid fa-cart-shopping icon"></i>
              <span className="cart-count cart-badge">2</span>
              Giỏ hàng
            </a>
          </div>

          {/* <!-- Modal Overlay -->
    <div class="modal-overlay" id="cartModal" onclick="closeCartModal(event)">
        <div class="cart-modal" onclick="event.stopPropagation()">
            <!-- Modal Header -->
            <div class="modal-header">
                <h2 class="modal-title">GIỎ HÀNG</h2>
                <button class="close-btn" onclick="closeCartModal()">×</button>
            </div>

            <!-- Modal Body -->
            <div class="modal-body">
                <!-- Cart Items -->
                <div class="cart-items">
                    <div class="cart-item">
                        <button class="remove-item">×</button>
                        <div class="item-image">
                            <img src="https://via.placeholder.com/60x60/8FBC8F/ffffff?text=Quần" alt="Quần Short">
                        </div>
                        <div class="item-details">
                            <h4 class="item-name">Quần Short Nam ICONDENIM Linen Surface Cotton</h4>
                            <p class="item-code">Rêu-0204 / 29</p>
                            <div class="item-price">
                                <span class="current-price">196,000₫</span>
                                <span class="original-price">320,000₫</span>
                            </div>
                            <p class="item-quantity">x1</p>
                        </div>
                    </div>

                    <div class="cart-item">
                        <button class="remove-item">×</button>
                        <div class="item-image">
                            <img src="https://via.placeholder.com/60x60/FF6B6B/ffffff?text=Áo" alt="Áo Thun">
                        </div>
                        <div class="item-details">
                            <h4 class="item-name">Áo Thun Nam ICONDENIM ft MARVEL Siblings Deadpool &amp; Wolverine</h4>
                            <p class="item-code">Đen-0455 / S</p>
                            <div class="item-price">
                                <span class="current-price">266,000₫</span>
                                <span class="original-price">319,000₫</span>
                            </div>
                            <p class="item-quantity">x1</p>
                        </div>
                    </div>
                </div>

                <div class="promotion-text">
                    Bạn đang được <strong>Giảm 66K</strong>, mua thêm 862,000₫ nhận ngay mã giảm 166K!
                </div>
            </div>

            <!-- Cart Summary -->
            <div class="cart-summary">
                <div class="summary-row">
                    <span>Tạm tính:</span>
                    <span>1,137,000₫</span>
                </div>
                <div class="summary-row">
                    <span>Giảm giá:</span>
                    <span>333,000₫</span>
                </div>
                <div class="summary-row total">
                    <span>Tổng tiền:</span>
                    <span>804,000₫</span>
                </div>
            </div>

            <!-- Modal Actions -->
            <div class="modal-actions">
                <button class="btn btn-outline" onclick="closeCartModal()">CHỈNH SỬA GIỎ HÀNG</button>
                <button class="btn btn-primary">THANH TOÁN</button>
            </div>
        </div>
    </div>

        </div> */}
          {/* Menu navigation */}
          {/* <nav className="menu-header">
          <ul>
            <li>
              <a href="#">Trang chủ</a>
            </li>
            <li>
              <a href="#">Thực đơn</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
          </ul>
        </nav> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
