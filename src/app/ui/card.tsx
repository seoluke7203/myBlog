interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}
// eslint-disable-next-line max-len
export default function Card({ title='title', description='description', link='/', image='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' }: Props) {
  return(
    <div className="card bg-base-100 w-96 shadow-xl glass">
      <figure>
        <img
          src={ image }
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          { title }
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{ description }</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  )
}