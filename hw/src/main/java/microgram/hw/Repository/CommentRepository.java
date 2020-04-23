package microgram.hw.Repository;

import microgram.hw.Model.Comment;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CommentRepository extends CrudRepository<Comment, String> {
    List<Comment> getCommentsByPublicationId(String publicationId);
    List<Comment> findAll();
}