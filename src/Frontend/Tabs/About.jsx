import React, { useState } from 'react'
import Note from '../Components/Note';

export default function About() {

  return (
    <div>
      <div className="container my-3">

        <h1>Add a new Note</h1>

        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

      <Note />
      
    </div>
  )
}
