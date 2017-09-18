import React from 'react';
import Head from './DefaultHead';
import Logo from './Logo';

export default (props) => {
  return (
    <div>
      <Head title={props.htmlTitle} />
      <div className="container">
        <Logo />
        {props.children}
      </div>
      <style jsx global>{`
          /* Make clicks pass-through */
          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: black;

            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;

            width: 100%;
            height: 2px;
          }

          /* Fancy blur effect */
          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px black, 0 0 8px black;
            opacity: 1.0;

            -webkit-transform: rotate(3deg) translate(0px, -4px);
                -ms-transform: rotate(3deg) translate(0px, -4px);
                    transform: rotate(3deg) translate(0px, -4px);
          }

          .nprogress-custom-parent {
            overflow: hidden;
            position: relative;
          }

          .nprogress-custom-parent #nprogress .bar {
            position: absolute;
          }

      `}</style>
    </div>
  );
};
