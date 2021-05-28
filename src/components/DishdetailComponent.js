import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {


    renderComments(comments) {
        const dishCommentDetails = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>

                </div>

            );
        });

        return (
            <div className="m-1">
                <h4>Comments</h4>
                {dishCommentDetails}
            </div>
        );


    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }

}

export default Dishdetail;