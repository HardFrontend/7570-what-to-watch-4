import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation, ActionCreator} from "./../../reducer/data/data.js";
import {getFlagCommentPublishing, getFlagCommentSendingError} from "./../../reducer/data/selector.js";

const minCommentLength = 50;
const maxCommentLength = 400;

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.formRef = createRef();
    this.commentRef = createRef();
    this.submitRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;
    const form = this.formRef.current;
    const formData = new FormData(form);

    console.log(`onSubmit`);
    console.log(formData.get(`rating`));
    console.log(formData.get(`review-text`));

    evt.preventDefault();
    onSubmit({
      rating: formData.get(`rating`),
      comment: formData.get(`review-text`)
    });
  }

  handleInput() {
    const commentInput = this.commentRef.current;
    const submitButton = this.submitRef.current;
    const commentInputValidity = commentInput.checkValidity();

    if (commentInputValidity) {
      submitButton.removeAttribute(`disabled`);
    } else {
      submitButton.setAttribute(`disabled`, `disabled`);
    }
  }

  render() {
    const {isCommentPublishing, isCommentSendingError} = this.props;
    const disabledFormFlag = isCommentPublishing ? `disabled` : false;

    return <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={this.handleSubmit}
          ref={this.formRef}
        >
          <div className="rating">
            <div className="rating__stars">
              <input
                className="rating__input"
                id="star-1"
                type="radio"
                name="rating"
                value="1"
                disabled={disabledFormFlag}
              />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input
                className="rating__input"
                id="star-2"
                type="radio"
                name="rating"
                value="2"
                disabled={disabledFormFlag}
              />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input
                className="rating__input"
                id="star-3"
                type="radio"
                name="rating"
                value="3"
                defaultChecked
                disabled={disabledFormFlag}
              />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input
                className="rating__input"
                id="star-4"
                type="radio"
                name="rating"
                value="4"
                disabled={disabledFormFlag}
              />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input
                className="rating__input"
                id="star-5"
                type="radio"
                name="rating"
                value="5"
                disabled={disabledFormFlag}
              />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              minLength={minCommentLength}
              maxLength={maxCommentLength}
              disabled={disabledFormFlag}
              onInput={this.handleInput}
              ref={this.commentRef}
            >
            </textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={disabledFormFlag}
                ref={this.submitRef}
              >
                Post
              </button>
            </div>

          </div>
          {isCommentSendingError &&
          <div style={{color: `red`}}>Ошибка отправки отзыва, мы сами в шоке О_о</div>
          }

        </form>
      </div>

    </section>;
  }

}

AddReview.propTypes = {
  isCommentPublishing: PropTypes.bool.isRequired,
  isCommentSendingError: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isCommentPublishing: getFlagCommentPublishing(state),
  isCommentSendingError: getFlagCommentSendingError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData) {
    console.log(`mapDispatchToProps`);

    dispatch(ActionCreator.changeFlagCommentPublishing(true));
    dispatch(Operation.commentPost(1, commentData));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
