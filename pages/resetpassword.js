import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa';

export default function ResetPassword() {
  return (
    <div className="container">
      <Head>
        <title>Fasta > Forgot Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
            <div className="title">
            <span><FaArrowLeft /></span>
            <span>FASTA</span>
            </div>
        </main>
        
            <div className="label">
                Recover Password
            </div>
            <div className="caption">
                Enter the email address you registered with.
            </div>
            <main>
            <form className="">
                        <div className="">
                            <input className="email" name="email" defaultValue="Email" required />
                        </div>
                        <div className="">
                            <input className="btn" type="button" name="email" defaultValue="RECOVER PASSWORD" />
                        </div>
            </form> 
        </main>

        <style jsx>{`
            .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            }

            main {
            padding: 2rem 0;
            flex: 1;
            flex-direction: column;
            align-items: flex-start;
            }

            .title {
                top: 45px;
                left: 166px;
                width: 194px;
                height: 16px;
                text-align: center;
                margin-top: 20px;
                font: Bold 14px/16px Arial;
                letter-spacing: 0px;
                color: #43A047;
                opacity: 1;
                display: flex;
                justify-content: space-evenly;
            }

            .label {
                top: 239px;
                left: 100px;
                width: 198px;
                height: 22px;
                text-align: center;
                font: Bold 20px/30px Arial;
                letter-spacing: 0px;
                color: #43A047;
                opacity: 1;
            }

            .caption {
                top: 249px;
                left: 90px;
                width: 315px;
                height: 11px;
                text-align: left;
                margin-top:20px;
                font: Regular 8px/10px Arial;
                letter-spacing: 0px;
                color: #43A047;
                opacity: 1;
            }

            .title,
            .description {
            text-align: center;
            }

            .email {
                top: 308px;
                left: 44px;
                width: 325px;
                height: 48px;
                background: #FFFFFF 0% 0% no-repeat padding-box;
                border: 1px solid #AFDEB1;
                opacity: 1;
                padding: 15px;
                color: #AFDEB1;
            }
            
            .btn {
                top: 280px;
                left: 24px;
                width: 327px;
                height: 48px;
                margin-top:20px;
                background: #43A047 0% 0% no-repeat padding-box;
                border-radius: 7px;
                font: Bold 10px/12px Arial;
                opacity: 1;
                color: #fff;
            }

            .btn-label {
                top: 299px;
                left: 133px;
                width: 110px;
                height: 11px;
                border-radius: 15px;
                margin-top: 15px;
                text-align: center;
                font: Bold 10px/12px Arial;
                letter-spacing: 0px;
                color: #FFFFFF;
                opacity: 1;
            }

            .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
            }

            @media (max-width: 600px) {
            .grid {
                width: 100%;
                flex-direction: column;
            }
            }
        `}</style>

        <style jsx global>{`
            html,
            body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }

            * {
            box-sizing: border-box;
            }
        `}</style>
    </div>
  )
}
