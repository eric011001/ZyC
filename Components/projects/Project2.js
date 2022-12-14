import React from 'react'

const Project2 = ({project}) => {
    console.log(project);
    /*const words = project.title.split(' ');
    console.log(Math.ceil( project.title.split(' ').length/2));
    const mid = Math.ceil( project.title.split(' ').length/2)
    */
    return(
        <div class="col-md-12 mb-90">
            <div class="projects">
                <figure><img src={project.img} alt="" class="img-fluid"/></figure>
                <div class="caption">
                    <h4>
                        {project.title}
                    </h4>
                    <p>{project.comment}</p>
                    <div class="line-dec"></div>
                    <div class="info-wrapper">
                        <div class="date"><i class="norc-factory"></i> {project.type}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project2;