package microgram.hw.Services;

import microgram.hw.Repository.CommentRepository;
import microgram.hw.Repository.PublicationRepository;
import microgram.hw.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    @Autowired
    CommentRepository commentRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PublicationRepository publicationRepository;
}

