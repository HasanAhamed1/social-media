import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
  const {createUser, signInWithGoogle} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(err => console.error(err));
    }

    const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <input className='btn btn-submit' type="submit" value="SignUp" />
        </div>
      </form>
      <button onClick={handleGoogleSignIn}>Sign in With Google</button>
      <p>Already have an account<Link to='/login' className='border'>Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default SignUp;