import { component$ } from '@builder.io/qwik';

export const ProductList = component$(() => {
  return (
    <ul class="py-5 grid place-items-center gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
      <li>
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img
              class="w-full aspect-video object-cover"
              src="https://i.dummyjson.com/data/products/15/thumbnail.jpg"
              alt="Shoes"
              width={200}
              height={120}
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img
              class="w-full aspect-video object-cover"
              src="https://i.dummyjson.com/data/products/15/thumbnail.jpg"
              alt="Shoes"
              width={200}
              height={120}
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
});
