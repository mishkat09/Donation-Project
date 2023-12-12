import axios from "axios";
import Swal from "sweetalert2";


const ReviewForm = () => {
    const handleSubmit=(event)=>{
        event.preventDefault(event)
        const form = event.target 
        const reviewer = form.name.value 
        const comment = form.review.value 
        const rating = form.rating.value 
        const  review = {reviewer, comment, rating} || {}
        console.log(review)
        axios.post('http://localhost:5000/reviews', review)
        .then((data) => {
            if (data.data.insertedId) {
              Swal.fire({
                title: "Review Added !",
                text: "Successfully Added",
                icon: "success",
              });
              form.reset()
            }
          });

    }
  return (
    <div>
      <div className="card shrink-0 ">
        <form className="card-body" onSubmit={()=>handleSubmit(event)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Raating</span>
            </label>
            <input
              type="text"
              placeholder="Rating"
              name="rating"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">review</span>
            </label>
           <textarea name="review" id="" cols="30" rows="10" className="border" placeholder="Reviwe here"></textarea>

          </div>
          <div className="form-control mt-6">
            <button className="btn" >Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
