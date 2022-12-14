import React from 'react'

const Project1 = ({project}) => {
    console.log(project.title.split(' ').length);
    return(
        <div class="col-md-12 mb-90">
            <div class="projects left">
                <figure><img src={project.img} alt="" class="img-fluid"/></figure>
                <div class="caption">
                    <h4>{project.title}</h4>
                    <p>{project.comment}</p>
                    <div class="line-dec"></div>
                    <div class="info-wrapper">
                        <div class="date"><i class="norc-new-construction"></i> {project.type}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project1;