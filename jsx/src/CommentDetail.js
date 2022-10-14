import React from "react";
import { faker } from "@faker-js/faker";

class CommentDetail extends React.Component {
  render() {
    return (
      <div class="flex justify-center relative top-1/3">
        <div class="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
          <div class="relative flex gap-4">
            <img
              src={faker.image.avatar()}
              class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
              alt=""
              loading="lazy"
            />
            <div class="flex flex-col w-full">
              <div class="flex flex-row justify-between">
                <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">
                  {this.props.commentor}
                </p>
                <a class="text-gray-500 text-xl" href="#">
                  <i class="fa-solid fa-trash"></i>
                </a>
              </div>
              <p class="text-gray-400 text-sm">{this.props.date}</p>
            </div>
          </div>
          <p class="-mt-4 text-gray-500">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default CommentDetail;
