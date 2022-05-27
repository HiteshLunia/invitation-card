import React, { Component } from "react";

class FooterComp extends Component {
  render() {
    return (
      //   <footer>
      //     <div class="container footer-details">
      //       Developed by Hitesh Lunia &copy;{" "}
      //     </div   >
      //   </footer>
      <footer class="flex-shrink-0 py-1 bg-dark text-white-50 opacity-75">
        <div class="container text-center">
          <small>Developed by Hitesh Lunia &copy;</small>
        </div>
      </footer>
    );
  }
}

export default FooterComp;
